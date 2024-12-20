import BlogDetailsClient from "./blog-details-client";

export default function BlogDetailsPage({ params }: { params: { slug: string } }) {
  return <BlogDetailsClient slug={params.slug} />;
}
