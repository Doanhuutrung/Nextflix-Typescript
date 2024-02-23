import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface iAppProps {
  title: string;
  overview: string;
  youtubeUrl: string;
  state: boolean;
  changeState: any;
  release: number;
  age: number;
  duration: number;
}

export default function PlayVideoModal({
  changeState,
  overview,
  youtubeUrl,
  state,
  title,
  release,
  age,
  duration,
}: iAppProps) {
  return (
    <Dialog open={state} onOpenChange={() => changeState(!state)}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{overview}</DialogDescription>
          <div className="flex gap-2 items-center">
            <p>{release}</p>
            <p className="border py-0.5 px-1 border-gray-200 rounded-xl">
              {age}+
            </p>
            <p>{duration}</p>
          </div>
        </DialogHeader>
        <iframe src={youtubeUrl} title="using youtube url" height={250} className="w-full aspect-auto"></iframe>
      </DialogContent>
    </Dialog>
  );
}
