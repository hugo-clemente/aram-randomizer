import { redirect } from 'next/navigation';

export const runtime = 'experimental-edge';

function generateSeed() {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < 15) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export default function Page() {
  const seed = generateSeed();

  redirect(`/${seed}`);
}
