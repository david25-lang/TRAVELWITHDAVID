import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { blogPosts, destinations } from '../data/siteData';
import { useSeo } from '../hooks/useSeo';

const Blog = () => {
  useSeo('Travel Guide | Davis_Gee Travel', 'Read Davis_Gee Travel editorial travel articles, packing guides, and destination advice.');

  return (
    <div className="pb-24">
      <PageHero
        eyebrow="Travel Guide"
        title="Editorial travel content with a premium tone"
        description="Browse practical articles, destination inspiration, and thoughtful planning advice."
        image={destinations[0].image}
      />

      <section className="shell mt-12 grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          {blogPosts.map((post) => (
            <article key={post.slug} className="surface card-hover overflow-hidden rounded-[1.25rem] p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <img src={post.image} alt={post.title} className="h-36 w-full flex-shrink-0 rounded-md object-cover sm:w-40" />
                <div>
                  <p className="eyebrow">{post.category}</p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-950">{post.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{post.excerpt} {post.content && post.content.length ? post.content.slice(0, 2).join(' ') : ''}</p>
                  <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link to={`/blog/${post.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-700">
                    Read More
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside className="md:col-span-1 space-y-6">
          <div className="rounded-[1.25rem] border border-slate-200 bg-white p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-950">How to use this guide</h3>
            <p className="mt-3 text-sm text-slate-700">Practical tips, packing lists, and planning notes to help you prepare for trips with confidence. Click any article to read a full guide.</p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-[0.2em]">How to travel — Popular reads</h4>
            {blogPosts.slice(0, 10).map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="flex items-center gap-3 rounded-md border border-slate-200 bg-white p-3 shadow-sm transition hover:bg-slate-50">
                <img src={post.image} alt={post.title} className="h-12 w-16 rounded object-cover" />
                <div className="text-sm">
                  <div className="font-medium text-slate-950">{post.title}</div>
                  <div className="text-xs text-slate-600">{post.readTime}</div>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </section>
    </div>
  );
};

export default Blog;
