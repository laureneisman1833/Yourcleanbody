# Product Image Replacement Manifest

## Identified placeholder/generic assets
- `/images/products/wellness-product.png` was reused for 5 unrelated products (milk thistle, dental tape, alkaline water, vibration plate, nut milk bag).
- `/images/products/skincare-product.png` and `/images/products/raw-almonds-product.png` were generic and not product-specific.
- `/images/hero/clean-bodies-hero-portrait.png` previously showed a generic cream-in-hand image while the homepage used founder-specific alt text.

## New product-specific assets created
1. `raw-almonds-3lb.png` → Raw Almonds (3 lbs)
2. `beef-tallow-moisturizer.png` → Beef Tallow Healing Moisturizer
3. `oxygenated-milk-thistle.png` → Oxygenated Milk Thistle
4. `dental-tape.png` → Dental Tape
5. `alkaline-water.png` → Essence Alkaline Water
6. `vibration-plate.png` → Vibration Plate
7. `nut-milk-bag.png` → Nut Milk Bag

## Supporting hero gap addressed
- Replaced `/images/hero/clean-bodies-hero-portrait.png` with a cohesive wellness still-life matching site tone and product line.

## Code mapping updates
- Updated `src/data/products.js` so each product now references its own dedicated image asset.
- Updated `src/pages/blog/AlmondMilkRecipe.jsx` sidebar card image to `raw-almonds-3lb.png` for consistency.
- Updated homepage hero alt text in `src/pages/Home.jsx` to accurately describe the current image.
