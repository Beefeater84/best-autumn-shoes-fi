# 📊 Database Schema Planning

## 🎯 Best Practices for Database Schema Design

### 1. **Planning Before Coding**

- [ ] Define entities (what do we store?)
- [ ] Define relationships between them (how are they connected?)
- [ ] Define attributes (what fields?)
- [ ] Data normalization

### 2. **Naming Conventions**

```sql
-- ✅ Good
users, posts, user_posts
created_at, updated_at
user_id, post_id

-- ❌ Bad
Users, Post, userPosts
createdAt, date_created
userId, postid
```

### 3. **Standard Fields for Each Table**

```sql
id SERIAL PRIMARY KEY,              -- unique ID
created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(), -- when created
updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()  -- when updated
```

### 4. **Recommended Data Types (PostgreSQL)**

- `TEXT` instead of `VARCHAR` (more flexible)
- `TIMESTAMP WITH TIME ZONE` for time
- `BOOLEAN` for yes/no
- `INTEGER` for IDs and numbers
- `JSONB` for structured data

### 5. **Relationship Types**

- **1:1** (one to one) — rarely used
- **1:N** (one to many) — foreign key
- **N:N** (many to many) — junction table

---

## 🚀 Our Schema Planning Process

### Step 1: Project Description

**Project Name:** Best Autumn Shoes Finland

**Application Type:** E-commerce Showcase/Catalog

- [ ] Blog
- [ ] Social Network
- [x] E-commerce
- [ ] CMS System
- [ ] Other: \***\*\_\_\_\*\***

**Main Users:**

- Customers looking for quality shoes for Finnish climate
- Visitors researching shoe brands and technologies
- People seeking autumn/winter footwear recommendations

**Main Functionality:**

- Browse shoe brands available in Finland
- View shoe technologies and specifications
- Filter shoes by brand, technology, climate suitability
- Read detailed brand and product information

### Step 2: Entity Definition

> What will we store in the database?

1. **Brands**
   - Description: Shoe manufacturers and companies
   - Examples: Halti, Sorel, Viking, Helly Hansen, Nokian Footwear, Timberland

2. **Technologies**
   - Description: Technical features and innovations used in shoes
   - Examples: Waterproof membranes, insulation types, sole technologies, materials

3. **Shoes/Products**
   - Description: Individual shoe models and products
   - Examples: Halti Jalas hiking boots, Sorel Caribou winter boots

### Step 3: Attribute Definition

> What fields does each entity have?

#### Brands

- [x] id (SERIAL PRIMARY KEY)
- [x] name (TEXT) - brand name (e.g., "Halti", "Sorel")
- [x] description (TEXT) - brand description and history
- [x] country_origin (TEXT) - country where brand originated (e.g., "Finland", "Canada")
- [x] specialization (TEXT) - what they specialize in (e.g., "outdoor footwear", "winter boots")
- [x] website_url (TEXT) - official brand website
- [x] logo_url (TEXT) - brand logo image URL
- [x] created_at (TIMESTAMP WITH TIME ZONE)
- [x] updated_at (TIMESTAMP WITH TIME ZONE)

#### Technologies

- [x] id (SERIAL PRIMARY KEY)
- [x] name (TEXT) - technology name (e.g., "Gore-Tex", "Thinsulate")
- [x] description (TEXT) - detailed technology description
- [x] category (TEXT) - technology type (e.g., "waterproof", "insulation", "sole")
- [x] benefits (TEXT) - key benefits and features
- [x] created_at (TIMESTAMP WITH TIME ZONE)
- [x] updated_at (TIMESTAMP WITH TIME ZONE)

#### Shoes/Products

- [x] id (SERIAL PRIMARY KEY)
- [x] name (TEXT) - product name/model
- [x] brand_id (INTEGER) - reference to brands table
- [x] description (TEXT) - product description
- [x] price_range (TEXT) - price range (e.g., "€100-150")
- [x] climate_suitability (TEXT) - suitable climate conditions
- [x] main_image_url (TEXT) - main product image
- [x] created_at (TIMESTAMP WITH TIME ZONE)
- [x] updated_at (TIMESTAMP WITH TIME ZONE)

### Step 4: Relationship Definition

> How are entities connected to each other?

1. **Brands ↔ Shoes/Products**
   - Relationship type: 1:N (one brand has many products)
   - Description: Each shoe belongs to one brand, but one brand can have many shoes
   - Implementation: shoes.brand_id → brands.id (foreign key)

2. **Shoes ↔ Technologies**
   - Relationship type: N:N (many to many)
   - Description: One shoe can use multiple technologies, one technology can be used in multiple shoes
   - Implementation: Junction table shoe_technologies (shoe_id, technology_id)

3. **Brands ↔ Technologies**
   - Relationship type: N:N (many to many)
   - Description: One brand can develop/use multiple technologies, one technology can be used by multiple brands (e.g., Gore-Tex, Vibram soles) or be exclusive to one brand (e.g., Nike Air)
   - Implementation: Junction table brand_technologies (brand_id, technology_id, is_exclusive)

### Step 5: ER Diagram (Entity-Relationship)

```dbml
Table brands {
  id integer [primary key]
  name text [not null]
  description text
  country_origin text
  specialization text
  website_url text
  logo_url text
  created_at timestamp [default: 'now()']
  updated_at timestamp [default: 'now()']
}

Table technologies {
  id integer [primary key]
  name text [not null]
  description text
  category text
  benefits text
  created_at timestamp [default: 'now()']
  updated_at timestamp [default: 'now()']
}

Table shoes {
  id integer [primary key]
  name text [not null]
  brand_id integer [not null]
  description text
  price_range text
  climate_suitability text
  main_image_url text
  created_at timestamp [default: 'now()']
  updated_at timestamp [default: 'now()']
}

Table shoe_technologies {
  shoe_id integer [not null]
  technology_id integer [not null]
  created_at timestamp [default: 'now()']
}

Table brand_technologies {
  brand_id integer [not null]
  technology_id integer [not null]
  is_exclusive boolean [default: false]
  created_at timestamp [default: 'now()']
}

Ref: shoes.brand_id > brands.id // many-to-one
Ref: shoe_technologies.shoe_id > shoes.id // many-to-one
Ref: shoe_technologies.technology_id > technologies.id // many-to-one
Ref: brand_technologies.brand_id > brands.id // many-to-one
Ref: brand_technologies.technology_id > technologies.id // many-to-one
```

### Step 6: Schema Validation

- [x] No data duplication - each table has unique purpose
- [x] All relationships are correct - proper foreign keys and junction tables
- [x] Naming conventions followed - snake_case, descriptive names
- [x] Performance indexes added - will add on foreign keys and frequently searched fields
- [x] Security considerations (RLS) - basic structure ready, will implement as needed

---

## 📝 Notes and Comments

_[Place for additional notes during planning process]_

---

## ✅ Final Schema for Implementation

### Summary

Our shoe showcase database consists of 5 tables:

- **brands** (shoe manufacturers)
- **technologies** (technical features)
- **shoes** (product models)
- **shoe_technologies** (which technologies each shoe uses)
- **brand_technologies** (which technologies each brand develops/uses)

### Ready for SQL Migration Creation

The schema is validated and ready to be converted into Supabase migration files.

Key relationships:

- 1:N → Brands to Shoes
- N:N → Shoes to Technologies (via shoe_technologies)
- N:N → Brands to Technologies (via brand_technologies)
