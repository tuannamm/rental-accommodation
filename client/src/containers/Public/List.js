import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Item } from "../../components";
import { getPosts } from "../../store/actions/post";

const List = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className="w-full p-2 rounded-md bg-white shadow-md px-6">
      <div className="flex items-center justify-between mt-2">
        <h4 className="text-xl font-semibold">Danh sách tin đăng</h4>
        <span>Cập nhật: 14:14 11/6/2023</span>
      </div>
      <div className="flex items-center gap-3 my-2">
        <span>Sắp xếp: </span>
        <Button text="Mới nhất" bgColor="bg-gray-200"></Button>
        <Button text="Mặc định" bgColor="bg-gray-200"></Button>
      </div>
      <div className="items">
        {posts &&
          posts.length > 0 &&
          posts.map((post) => (
            <Item
              key={post?.id}
              address={post?.address}
              attributes={post?.attributes}
              images={JSON.parse(post?.images?.image)}
              description={JSON.parse(post?.description)}
              star={+post?.star}
              title={post?.title}
              user={post?.user}
            />
          ))}
      </div>
    </div>
  );
};

export default List;
