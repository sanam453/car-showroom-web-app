import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Trust() {
  return (
    <div className="flex flex-col items-center mt-12">
      <p className="max-w-2xl mx-auto text-center mb-4">
        Trusted by over <strong className="text-white">50,000</strong> designers
        and developers
      </p>
      <div className="flex flex-row items-center -space-x-4">
        <Avatar className="ring-1 ring-white h-full w-full z-0 size-12">
          <AvatarImage
            src="https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg"
            alt="photo of a person"
          />
          <AvatarFallback>IMG</AvatarFallback>
        </Avatar>
        <Avatar className="ring-1 ring-white h-full w-full z-10 size-12">
          <AvatarImage
            src="https://images.pexels.com/photos/27521031/pexels-photo-27521031/free-photo-of-retratos-da-intimidade-de-uma-tarde.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="photo of a person"
          />
          <AvatarFallback>IMG</AvatarFallback>
        </Avatar>
        <Avatar className="ring-1 ring-white h-full w-full z-20 size-12">
          <AvatarImage
            src="https://images.pexels.com/photos/3877800/pexels-photo-3877800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="photo of a person"
          />
          <AvatarFallback>IMG</AvatarFallback>
        </Avatar>
        <Avatar className="ring-1 ring-white h-full w-full z-20 size-12">
          <AvatarImage
            src="https://images.pexels.com/photos/20709113/pexels-photo-20709113/free-photo-of-brunette-with-friendly-smile.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="photo of a person"
          />
          <AvatarFallback>IMG</AvatarFallback>
        </Avatar>
        <Avatar className="ring-1 ring-white h-full w-full z-20 size-12">
          <AvatarImage
            src="https://images.pexels.com/photos/19613208/pexels-photo-19613208/free-photo-of-portrait-of-a-smiling-man-in-white-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="photo of a person"
          />
          <AvatarFallback>IMG</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
