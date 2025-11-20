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

**Project Name:** _[fill in]_

**Application Type:** _[fill in]_

- [ ] Blog
- [ ] Social Network
- [ ] E-commerce
- [ ] CMS System
- [ ] Other: \***\*\_\_\_\*\***

**Main Users:**

- _[fill in]_

**Main Functionality:**

- _[fill in]_

### Step 2: Entity Definition

> What will we store in the database?

1. **[Entity 1]**
   - Description:
   - Examples:

2. **[Entity 2]**
   - Description:
   - Examples:

3. **[Entity 3]**
   - Description:
   - Examples:

### Step 3: Attribute Definition

> What fields does each entity have?

#### [Entity 1]

- [ ] id (SERIAL PRIMARY KEY)
- [ ] [field] ([type]) - [description]
- [ ] [field] ([type]) - [description]
- [ ] created_at (TIMESTAMP WITH TIME ZONE)
- [ ] updated_at (TIMESTAMP WITH TIME ZONE)

#### [Entity 2]

- [ ] id (SERIAL PRIMARY KEY)
- [ ] [field] ([type]) - [description]
- [ ] [field] ([type]) - [description]
- [ ] created_at (TIMESTAMP WITH TIME ZONE)
- [ ] updated_at (TIMESTAMP WITH TIME ZONE)

### Step 4: Relationship Definition

> How are entities connected to each other?

1. **[Entity A] ↔ [Entity B]**
   - Relationship type: [1:1 / 1:N / N:N]
   - Description:
   - Implementation:

2. **[Entity C] ↔ [Entity D]**
   - Relationship type: [1:1 / 1:N / N:N]
   - Description:
   - Implementation:

### Step 5: ER Diagram (Entity-Relationship)

```
[Text-based ER diagram will be here]

Table [name] {
  id integer [primary key]
  [field] [type]
  [field] [type]
  created_at timestamp
  updated_at timestamp
}

Ref: [table1].[field] > [table2].[field] // [relationship type]
```

### Step 6: Schema Validation

- [ ] No data duplication
- [ ] All relationships are correct
- [ ] Naming conventions followed
- [ ] Performance indexes added
- [ ] Security considerations (RLS)

---

## 📝 Notes and Comments

_[Place for additional notes during planning process]_

---

## ✅ Final Schema for Implementation

_[Final schema after all planning iterations]_

```sql
-- Final SQL for table creation will be here
```
