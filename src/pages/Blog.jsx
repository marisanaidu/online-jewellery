import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogData } from '../data/blogData';

const Blog = () => {
  const posts = blogData;

  return (
    <div className="pt-28 pb-24 bg-white min-h-screen px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold font-montserrat uppercase tracking-[0.3em] text-xs font-bold mb-4 block">The Atelier Journal</span>
          <h1 className="text-4xl md:text-5xl font-bold text-midnight font-montserrat mb-4">Insights & Inspirations</h1>
          <p className="text-silver font-roboto max-w-2xl mx-auto italic">Exploring the craftsmanship behind our fine jewelry, artisanal leather goods, and premium home decor.</p>
        </div>

        {/* Featured Post */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col lg:flex-row bg-pearl/20 rounded-3xl overflow-hidden group"
          >
            <Link
              to={`/blog/${posts[0].slug}`}
              className="w-full lg:w-3/5 relative overflow-hidden block"
              style={{ minHeight: '380px' }}
            >
              <img
                src={posts[0].image}
                alt={posts[0].title}
                className="w-full h-full object-cover absolute inset-0 transition-transform duration-1000 group-hover:scale-105"
                onError={(e) => { e.target.onerror = null; e.target.src = '/src/assets/necklace.png'; }}
              />
              <div className="absolute top-4 left-4 border border-white/50 backdrop-blur-md bg-white/20 px-4 py-1 text-white font-bold text-xs uppercase tracking-widest rounded-full">
                Featured Article
              </div>
            </Link>
            <div className="w-full lg:w-2/5 p-10 lg:p-14 flex flex-col justify-center">
              <span className="text-gold font-bold text-xs uppercase tracking-widest mb-4 block">{posts[0].category}</span>
              <Link to={`/blog/${posts[0].slug}`}>
                <h2 className="text-3xl lg:text-4xl font-bold text-midnight font-montserrat mb-6 leading-tight group-hover:text-gold transition-colors">{posts[0].title}</h2>
              </Link>
              <p className="text-charcoal leading-relaxed mb-8 font-roboto">{posts[0].excerpt}</p>
              <div className="flex items-center gap-6 text-sm text-silver font-roboto font-bold mb-8">
                <span className="flex items-center gap-2"><Calendar size={14} /> {posts[0].date}</span>
                <span className="flex items-center gap-2"><User size={14} /> {posts[0].author}</span>
              </div>
              <Link to={`/blog/${posts[0].slug}`} className="self-start btn-primary flex items-center gap-2">
                <span>Read Journal</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Latest Stories */}
        <h3 className="text-2xl font-bold text-midnight font-montserrat mb-8 border-b border-pearl pb-4">Latest Stories</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.slice(1).map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col h-full"
            >
              <Link to={`/blog/${post.slug}`} className="block relative overflow-hidden rounded-2xl mb-6" style={{ height: '240px' }}>
                <img
                  src={post.image}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={post.title}
                  onError={(e) => { e.target.onerror = null; e.target.src = '/src/assets/bracelet.png'; }}
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 text-midnight font-bold text-[10px] uppercase tracking-widest rounded-full shadow-sm">
                  {post.category}
                </div>
              </Link>
              <div className="flex items-center gap-4 text-[10px] text-silver uppercase tracking-widest font-bold mb-3">
                <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
              </div>
              <Link to={`/blog/${post.slug}`}>
                <h3 className="text-xl font-bold text-midnight mb-3 font-montserrat group-hover:text-gold transition-colors leading-tight">
                  {post.title}
                </h3>
              </Link>
              <p className="text-charcoal text-sm leading-relaxed mb-6 line-clamp-3 flex-grow font-roboto">
                {post.excerpt}
              </p>
              <Link to={`/blog/${post.slug}`} className="flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-xs border-b border-transparent hover:border-gold pb-1 transition-all mt-auto self-start">
                <span>Read Story</span>
                <ArrowRight size={14} />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
