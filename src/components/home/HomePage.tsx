import Image from 'next/image';
import imgs from 'selected-rows.json'
import {getAllPosts, getAllUsers } from '~/server/db';

export default async function HomePage() {
  const users = await getAllUsers();
  const posts = await getAllPosts();
  console.log(posts)

  return (
    <section className="flex min-h-screen flex-col items-center justify-center ">
      <div className="flex flex-wrap justify-center items-center gap-4 ">
      {
        [...imgs,...imgs].map((img,idx) => <div key={img.key+idx} className="">
          <Image width='400' height='250' src={img.url} alt="" />
        </div>)
        }
        </div>
    </section>
  );
}
