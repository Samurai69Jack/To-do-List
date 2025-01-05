/*
  # Initial Schema Setup for URL Shortener

  1. New Tables
    - users
      - id (uuid, primary key)
      - email (text, unique)
      - google_id (text, unique)
      - created_at (timestamp)
    
    - urls
      - id (uuid, primary key)
      - user_id (uuid, foreign key)
      - alias (text, unique)
      - long_url (text)
      - topic (text)
      - created_at (timestamp)
    
    - analytics
      - id (uuid, primary key)
      - url_id (uuid, foreign key)
      - ip_address (text)
      - user_agent (text)
      - os_type (text)
      - device_type (text)
      - created_at (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Users table
CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  google_id text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

-- URLs table
CREATE TABLE urls (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id),
  alias text UNIQUE NOT NULL,
  long_url text NOT NULL,
  topic text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE urls ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage own URLs"
  ON urls
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);

-- Analytics table
CREATE TABLE analytics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  url_id uuid REFERENCES urls(id),
  ip_address text NOT NULL,
  user_agent text NOT NULL,
  os_type text NOT NULL,
  device_type text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE analytics ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read analytics for own URLs"
  ON analytics
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM urls
      WHERE urls.id = analytics.url_id
      AND urls.user_id = auth.uid()
    )
  );

-- Indexes for better query performance
CREATE INDEX idx_urls_user_id ON urls(user_id);
CREATE INDEX idx_urls_topic ON urls(topic);
CREATE INDEX idx_analytics_url_id ON analytics(url_id);
CREATE INDEX idx_analytics_created_at ON analytics(created_at);