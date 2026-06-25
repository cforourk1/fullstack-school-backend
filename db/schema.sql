DROP TABLE IF EXISTS professors CASCADE;
DROP TABLE IF EXISTS departments CASCADE;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  username text UNIQUE NOT NULL,
  password text NOT NULL
);

CREATE TABLE departments (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  contact_email text NOT NULL,
  description text NOT NULL,
  image_url text NOT NULL
);

CREATE TABLE professors (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  contact_email text NOT NULL,
  biography text NOT NULL,
  image_url text NOT NULL,
  department_id uuid NOT NULL REFERENCES departments(id) ON DELETE CASCADE
);