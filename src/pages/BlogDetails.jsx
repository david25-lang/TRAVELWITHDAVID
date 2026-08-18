import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { blogPosts, destinations, findBlogPostBySlug } from '../data/siteData';
import { useSeo } from '../hooks/useSeo';

const BlogDetails = () => {
  const { slug } = useParams();
  const post = findBlogPostBySlug(slug);
  const related = blogPosts.filter((item) => item.slug !== slug).slice(0, 3);

  useSeo(post ? `${post.title} | Davis_Gee Travel` : 'Travel Guide | Davis_Gee Travel', post?.excerpt || 'Davis_Gee Travel editorial guide article.');

  if (!post) {
    return (
      <div className="shell py-24 text-center text-slate-700">
        <h1 className="text-3xl font-semibold text-slate-950">Article not found</h1>
        <Link to="/blog" className="mt-6 inline-flex text-amber-700">Back to Travel Guide</Link>
      </div>
    );
  }

  return (
    <div className="pb-24">
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        image={post.image}
      />

      <section className="shell mt-12 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <article className="surface rounded-[2rem] p-6 lg:p-8">
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
          <div className="mt-8 space-y-5 text-base leading-8 text-slate-700">
            {post.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </article>

        <aside className="surface-strong rounded-[2rem] p-6 lg:p-8 lg:sticky lg:top-28">
          <h2 className="text-2xl font-semibold text-white">Related Reads</h2>
          <div className="mt-6 space-y-4">
            {related.map((item) => (
              <Link key={item.slug} to={`/blog/${item.slug}`} className="block rounded-[1.5rem] border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
                <p className="text-sm text-amber-200">{item.category}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
              </Link>
            ))}
          </div>
        </aside>
      </section>
    </div>
  );
};

export default BlogDetails;
