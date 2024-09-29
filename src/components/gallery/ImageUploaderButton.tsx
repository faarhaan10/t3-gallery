'use client'  
import { UploadButton } from "~/utils/uploadthing";
import { SignedIn } from "@clerk/nextjs"; 
import { useRouter } from "next/navigation";

const ImageUploaderButton = () => {
    const router = useRouter()
    return (
        <>
           <SignedIn>
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={async () => router.refresh()}
            onUploadError={(error: Error) => {
              // Do something with the error.
              alert(`ERROR! ${error.message}`);
            }}
          />
        </SignedIn> 
        </>
    );
};

export default ImageUploaderButton;