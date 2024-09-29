import { SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import { getAllPhotos } from "~/server/db";
import ImageUploaderButton from "./ImageUploaderButton";

const MyGallery = async () => {
  const images = await getAllPhotos();
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {[...images].map((img, idx) => (
          <div key={img.id + idx + "images"} className="">
            <Image width="400" height="250" src={img.image_url} alt="" />
          </div>
        ))}

        <br />

        <SignedIn>
          <ImageUploaderButton />
        </SignedIn>
      </div>
    </>
  );
};

export default MyGallery;
