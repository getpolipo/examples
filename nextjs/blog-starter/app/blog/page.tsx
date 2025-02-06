import { ReactFigma } from "@/app/polipo-react";
import { getAllPosts } from "@/lib/api";
import Image from "next/image";
import DateFormatter from "../_components/date-formatter";
import Link from "next/link";

export default function Home() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <ReactFigma layout="home">
      {{
        HeroPostCoverImage: (
          <Image
            src={heroPost.coverImage}
            alt={`Cover Image for ${heroPost.title}`}
            width={1300}
            height={630}
          />
        ),
        HeroPostTitle: (
          <h3>
            <Link
              href={`/blog/posts/${heroPost.slug}`}
              className="hover:underline"
            >
              {heroPost.title}
            </Link>
          </h3>
        ),
        HeroPostDate: (
          <>
            <DateFormatter dateString={heroPost.date} />
          </>
        ),
        HeroPostExcerpt: <p>{heroPost.excerpt}</p>,
        HeroPostAvatarImage: (
          <img src={heroPost.author.picture} alt={heroPost.author.name} />
        ),
        HeroPostAvatarName: <div>{heroPost.author.name}</div>,
        MoreStoriesList: (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            }}
          >
            {morePosts.map((post, index) => (
              <ReactFigma key={index} layout="postCard">
                {{
                  PostCardImage: (
                    <Image
                      src={post.coverImage}
                      alt={`Cover image for ${post.title}`}
                      width={400}
                      height={200}
                    />
                  ),
                  PostCardTitle: (
                    <h3>
                      <Link
                        href={`/blog/posts/${post.slug}`}
                        className="hover:underline"
                      >
                        {post.title}
                      </Link>
                    </h3>
                  ),
                  PostCardDate: (
                    <>
                      <DateFormatter dateString={post.date} />
                    </>
                  ),
                  PostCardExcerpt: <p>{post.excerpt}</p>,
                  PostCardAuthorImage: (
                    <img src={post.author.picture} alt={post.author.name} />
                  ),
                  PostCardAuthorName: <div>{post.author.name}</div>,
                }}
              </ReactFigma>
            ))}
          </div>
        ),
      }}
    </ReactFigma>
  );
}
