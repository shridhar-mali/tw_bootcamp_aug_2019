DELETE FROM book_order
WHERE book_id IS NULL
   OR book_price IS NULL
   OR customer_name IS NULL
   OR mobile_number IS NULL
   OR email_address IS NULL
   OR customer_address IS NULL
   OR pincode IS NULL
   OR country IS NULL;
