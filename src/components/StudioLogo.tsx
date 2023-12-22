import Image from "next/image";
import banner from "../images/banner.jpg"

function StudioLogo(props: any) {
  const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover"
        height={50}
        width={50}
        src={banner}
        alt="studiologo"
      />
      <>{renderDefault(props)}</>
    </div>
  );
}

export default StudioLogo;
