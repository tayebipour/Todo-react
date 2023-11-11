export const array_imgPath = [
    "https://images.pexels.com/photos/4586902/pexels-photo-4586902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7888969/pexels-photo-7888969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5990265/pexels-photo-5990265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
export default function ImageList(propse)
{
    return(
        <div className="img-head">
        <img className="img-thumbnail" src={propse.imgPath} />
    </div>
    )
}