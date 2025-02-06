import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import { ReactFigma } from "@/app/polipo-react";
import DateFormatter from "@/app/_components/date-formatter";

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <ReactFigma layout="post">
      {{
        PostTitle: <h1>{post.title}</h1>,
        PostCoverImage: (
          <img src={post.coverImage} alt={`Cover image for ${post.title}`} />
        ),
        PostDate: (
          <>
            <DateFormatter dateString={post.date} />
          </>
        ),
        PostAuthorName: <p>{post.author.name}</p>,
        PostAuthorImage: (
          <img src={post.author.picture} alt={post.author.name} />
        ),
        PostContent: (
          <>
            <div
              dangerouslySetInnerHTML={{ __html: content }}
              className="prose"
            />
          </>
        ),
      }}
    </ReactFigma>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
