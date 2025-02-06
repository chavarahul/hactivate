import IconCloud from "@/app/components/ui/icon-cloud";

const nodetronicsSlugs = [
  "arduino",         
  "robotframework",  
  "tensorflow",     
  "drone",
  "nasa",            
  "raspberrypi",    
  "iot",            
  "blender", 
  "python"        
];

export function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg max-md:w-full items-center justify-center overflow-hidden bg-background px-20 pb-20 pt-8">
      <IconCloud iconSlugs={nodetronicsSlugs} />
    </div>
  );
}
