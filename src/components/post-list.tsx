import { draftMode } from "next/headers";
import PostListItem from "./post-list-item";
import { getAllPosts } from "@/lib/api";

export default async function PostList() {
    const { isEnabled } = draftMode();
    const allPosts = await getAllPosts(isEnabled);
    return (
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
          {allPosts.map((post) => (
            <PostListItem
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          ))}
        </div>
      </section>
    );
  }
  