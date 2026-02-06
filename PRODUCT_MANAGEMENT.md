# Product Management Guide

## How to Add, Edit, or Remove Products

All products are stored in a single JSON file for easy management. No coding knowledge required!

### Location
The products file is located at:
```
client/public/products.json
```

### Product Structure
Each product has the following fields:

```json
{
  "id": 1,
  "title": "Product Name",
  "description": "Product description text",
  "price": 9.99,
  "inStock": true,
  "category": "finance"
}
```

### Field Descriptions

- **id**: Unique number for each product (must be unique)
- **title**: Product name (displayed as the main heading)
- **description**: Product details (what the customer gets)
- **price**: Price in dollars (use decimal format like 9.99)
- **inStock**: Set to `true` if available, `false` if sold out
- **category**: Product category (options: "finance", "bundle", "tools", "guides", "reseller", "marketing")

### How to Add a New Product

1. Open `client/public/products.json`
2. Add a comma after the last product's closing brace `}`
3. Copy this template and paste it:

```json
{
  "id": 25,
  "title": "Your Product Name",
  "description": "Your product description here",
  "price": 19.99,
  "inStock": true,
  "category": "tools"
}
```

4. Update the `id` to be one higher than the last product
5. Fill in your product details
6. Save the file

### How to Edit a Product

1. Open `client/public/products.json`
2. Find the product you want to edit by searching for its title or id
3. Change any field you want (title, description, price, etc.)
4. Save the file

### How to Remove a Product

1. Open `client/public/products.json`
2. Find the product you want to remove
3. Delete the entire product object (from `{` to `}`)
4. Make sure to remove any extra commas that might be left behind
5. Save the file

### How to Mark a Product as Out of Stock

1. Open `client/public/products.json`
2. Find the product
3. Change `"inStock": true` to `"inStock": false`
4. Save the file

### Example: Adding a New Product

Before:
```json
  {
    "id": 24,
    "title": "Elite Pack",
    "description": "Buy EVERYTHING you want, all in one !",
    "price": 199.99,
    "inStock": true,
    "category": "bundle"
  }
]
```

After:
```json
  {
    "id": 24,
    "title": "Elite Pack",
    "description": "Buy EVERYTHING you want, all in one !",
    "price": 199.99,
    "inStock": true,
    "category": "bundle"
  },
  {
    "id": 25,
    "title": "New Product Name",
    "description": "Amazing new product description",
    "price": 29.99,
    "inStock": true,
    "category": "tools"
  }
]
```

### Important Notes

- Always use double quotes `"` for text values
- Numbers (id and price) don't need quotes
- Boolean values (true/false) don't need quotes
- Don't forget commas between products
- The last product should NOT have a comma after it
- Make sure the file starts with `[` and ends with `]`

### Testing Your Changes

After making changes:
1. Save the file
2. Refresh your website
3. The changes should appear immediately

If you see an error, check:
- All quotes are closed properly
- Commas are in the right places
- No extra commas at the end
- The JSON structure is valid

### Need Help?

If you encounter any issues:
1. Use a JSON validator online (search "JSON validator")
2. Paste your products.json content
3. It will show you any syntax errors

---

**Pro Tip**: Always make a backup copy of `products.json` before making major changes!
