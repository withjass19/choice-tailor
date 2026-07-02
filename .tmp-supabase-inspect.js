import fs from 'fs';
import { createClient } from '@supabase/supabase-js';

const env = fs.readFileSync('.env', 'utf8')
  .split(/\r?\n/)
  .filter(Boolean)
  .reduce((acc, line) => {
    const idx = line.indexOf('=');
    acc[line.slice(0, idx)] = line.slice(idx + 1);
    return acc;
  }, {});

const supabase = createClient(env.VITE_SUPABASE_URL, env.VITE_SUPABASE_ANON_KEY);

const columns = [
  'id',
  'email',
  'full_name',
  'phone',
  'role',
  'created_at',
  'updated_at',
  'city',
  'country',
  'state',
  'zip_code',
  'address',
  'street',
  'line1',
  'line2',
  'billing_address',
  'shipping_address',
  'orders_count',
  'total_spent',
  'measurement_profiles',
  'repeat_customers',
  'status',
  'profile_picture',
  'is_blocked',
  'blocked_at',
  'last_order_date',
  'customer_type',
  'type',
  'isActive',
  'job_title',
  'company',
  'payment_method',
  'notes'
];

async function main() {
  for (const col of columns) {
    const { data, error } = await supabase.from('profiles').select(col).limit(1);
    if (error) {
      console.log('INVALID', col, error.message);
    } else {
      console.log('VALID', col, data?.length, data);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
