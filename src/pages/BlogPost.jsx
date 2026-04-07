import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react';
import { blogData } from '../data/blogData';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogData.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-40 pb-20 text-center min-h-screen">
        <h1 className="text-3xl font-bold text-midnight font-montserrat mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-gold font-bold hover:underline">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-24 bg-white min-h-screen">
      {/* Hero Image */}
      <div className="w-full h-[55vh] overflow-hidden relative">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-midnight/50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-widest mb-4"
          >
            <Tag size={12} />
            <span>{post.category}</span>
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white text-3xl md:text-5xl font-bold font-montserrat max-w-3xl leading-tight mb-6"
          >
            {post.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-6 text-white/70 text-sm font-roboto"
          >
            <span className="flex items-center gap-2"><Calendar size={14} /> {post.date}</span>
            <span className="flex items-center gap-2"><User size={14} /> {post.author}</span>
          </motion.div>
        </div>
      </div>

      {/* Article Body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <Link to="/blog" className="inline-flex items-center gap-2 text-silver hover:text-gold transition-colors text-sm font-bold uppercase tracking-widest mb-12">
          <ArrowLeft size={16} />
          <span>Back to Journal</span>
        </Link>

        <div className="space-y-8 font-roboto text-charcoal leading-relaxed text-lg">
          {post.content.map((block, i) => {
            if (block.type === 'paragraph') {
              return <p key={i}>{block.text}</p>;
            }
            if (block.type === 'heading') {
              return <h2 key={i} className="text-2xl font-bold text-midnight font-montserrat mt-12 mb-4">{block.text}</h2>;
            }
            if (block.type === 'image') {
              return (
                <figure key={i} className="my-10">
                  <img
                    src={block.src}
                    alt={block.caption}
                    className="w-full rounded-2xl object-cover shadow-sm"
                    style={{ height: '360px' }}
                    onError={(e) => { e.target.onerror = null; e.target.src = '/src/assets/necklace.png'; }}
                  />
                  <figcaption className="text-center text-sm text-silver mt-3 italic">{block.caption}</figcaption>
                </figure>
              );
            }
            return null;
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 bg-midnight rounded-3xl p-10 text-center text-white">
          <h3 className="text-2xl font-bold font-montserrat mb-3 text-white">Explore Our Collections</h3>
          <p className="text-silver mb-6 font-roboto">Browse our curated jewelry, leather goods, and home decor — all handcrafted with love.</p>
          <Link to="/shop" className="btn-secondary inline-block">Shop Now</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
