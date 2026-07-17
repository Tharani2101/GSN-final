import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Home,
  MessageSquare,
  Rss,
  Heart,
  Settings,
  Search,
  MoreHorizontal,
  ThumbsUp,
  MessageCircle,
  Share2,
  Bookmark,
  X,
  ChevronRight,
} from 'lucide-react';

export function Sample1() {
  const [activeTab, setActiveTab] = useState('feeds');

  // Mock data for stories
  const stories = [
    { id: 1, name: 'Nature', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop' },
    { id: 2, name: 'Sunset', image: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=400&h=600&fit=crop' },
  ];

  // Mock data for feed posts
  const feedPosts = [
    {
      id: 1,
      user: { name: 'Brandon Wilson', avatar: 'https://i.pravatar.cc/150?img=33' },
      time: '10 mins ago',
      content: 'Iceland is truly one of the most beautiful countries in the world. An ice-blue glacier stretches out and snakes down a hillside.',
      images: [
        'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop',
      ],
      likes: 240,
      comments: 45,
    },
    {
      id: 2,
      user: { name: 'Sarah Chen', avatar: 'https://i.pravatar.cc/150?img=5' },
      time: '2 hours ago',
      content: "It was a very long journey from Lucerne but it's totally worth while! I have never seen such landscape before!",
      images: [
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      ],
      likes: 187,
      comments: 23,
    },
  ];

  // Mock data for suggestions
  const suggestions = [
    { id: 1, name: 'Michael Brooks', handle: '@mbrooks', avatar: 'https://i.pravatar.cc/150?img=12' },
    { id: 2, name: 'Emily Davis', handle: '@emilyd', avatar: 'https://i.pravatar.cc/150?img=24' },
    { id: 3, name: 'James Wilson', handle: '@jwilson', avatar: 'https://i.pravatar.cc/150?img=52' },
  ];

  // Mock data for recommendations
  const recommendations = [
    { id: 1, name: 'Travel', color: 'bg-pink-400' },
    { id: 2, name: 'Nature', color: 'bg-purple-400' },
    { id: 3, name: 'Photography', color: 'bg-blue-400' },
  ];

  const sidebarItems = [
    { icon: Home, label: 'Home', id: 'home' },
    { icon: MessageSquare, label: 'Discussions', id: 'discussions', count: 3 },
    { icon: Rss, label: 'Feeds', id: 'feeds' },
    { icon: Heart, label: 'Likes', id: 'likes' },
    { icon: Settings, label: 'Settings', id: 'settings' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F1E8] to-[#E8DCC8]">
      <div className="flex max-w-[1600px] mx-auto">
        {/* Left Sidebar */}
        <motion.aside
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="w-64 min-h-screen bg-white/80 backdrop-blur-sm p-6 border-r border-gray-200/50"
        >
          {/* Profile Section */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative">
              <img
                src="https://i.pravatar.cc/150?img=68"
                alt="Profile"
                className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white" />
            </div>
            <h3 className="mt-3 font-semibold text-gray-900">Brandon Wilson</h3>
            <p className="text-xs text-gray-500">@brandon_wilson</p>
          </div>

          {/* Navigation Menu */}
          <nav className="space-y-2">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                  activeTab === item.id
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </div>
                {item.count && (
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      activeTab === item.id ? 'bg-white/20' : 'bg-gray-200'
                    }`}
                  >
                    {item.count}
                  </span>
                )}
              </button>
            ))}
          </nav>

          {/* Bottom Section */}
          <div className="mt-auto pt-8">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-4 text-white">
              <h4 className="font-semibold mb-1">Upgrade to Pro</h4>
              <p className="text-xs opacity-90 mb-3">Get unlimited access to all features</p>
              <button className="w-full bg-white text-purple-600 rounded-lg py-2 text-sm font-semibold hover:bg-gray-100 transition-colors">
                Upgrade Now
              </button>
            </div>
          </div>
        </motion.aside>

        {/* Main Content Area */}
        <main className="flex-1 p-8">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold text-gray-900">Feeds</h1>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-10 pr-4 py-2 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button className="p-2 rounded-xl bg-white border border-gray-200 hover:bg-gray-50">
                  <Settings className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-4">
              <button className="px-4 py-2 rounded-xl bg-blue-500 text-white font-medium shadow-lg shadow-blue-500/30">
                All
              </button>
              <button className="px-4 py-2 rounded-xl bg-white text-gray-700 font-medium hover:bg-gray-50">
                Friends
              </button>
              <button className="px-4 py-2 rounded-xl bg-white text-gray-700 font-medium hover:bg-gray-50">
                Following
              </button>
            </div>
          </div>

          {/* Feed Posts */}
          <div className="space-y-6">
            {feedPosts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                {/* Post Header */}
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={post.user.avatar}
                      alt={post.user.name}
                      className="w-12 h-12 rounded-full border-2 border-gray-100"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{post.user.name}</h3>
                      <p className="text-sm text-gray-500">{post.time}</p>
                    </div>
                  </div>
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <MoreHorizontal className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                {/* Post Content */}
                <div className="px-4 pb-4">
                  <p className="text-gray-700 mb-4">{post.content}</p>

                  {/* Images Grid */}
                  <div className={`grid gap-2 ${post.images.length === 3 ? 'grid-cols-3' : 'grid-cols-1'}`}>
                    {post.images.map((image, idx) => (
                      <div
                        key={idx}
                        className="relative overflow-hidden rounded-xl aspect-[4/3] bg-gray-100"
                      >
                        <img
                          src={image}
                          alt={`Post ${idx + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Post Actions */}
                <div className="px-4 py-3 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors">
                      <ThumbsUp className="w-5 h-5" />
                      <span className="text-sm font-medium">{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-sm font-medium">{post.comments}</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                  <button className="text-gray-600 hover:text-blue-500 transition-colors">
                    <Bookmark className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </main>

        {/* Right Sidebar */}
        <motion.aside
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="w-80 min-h-screen bg-white/80 backdrop-blur-sm p-6 border-l border-gray-200/50"
        >
          {/* Stories Section */}
          <div className="mb-8">
            <h3 className="font-semibold text-gray-900 mb-4">Stories</h3>
            <div className="grid grid-cols-2 gap-3">
              {stories.map((story) => (
                <div
                  key={story.id}
                  className="relative rounded-xl overflow-hidden aspect-[3/4] cursor-pointer group"
                >
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <p className="absolute bottom-3 left-3 text-white font-medium text-sm">
                    {story.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Suggestions Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Suggestions</h3>
              <button className="text-sm text-blue-500 hover:text-blue-600">See all</button>
            </div>
            <div className="space-y-3">
              {suggestions.map((user) => (
                <div key={user.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-10 h-10 rounded-full border-2 border-gray-100"
                    />
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.handle}</p>
                    </div>
                  </div>
                  <button className="px-4 py-1.5 rounded-full bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition-colors">
                    Follow
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Recommendations Section */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Recommendations</h3>
            <div className="space-y-3">
              {recommendations.map((rec) => (
                <div
                  key={rec.id}
                  className={`${rec.color} rounded-xl p-4 text-white cursor-pointer hover:scale-105 transition-transform`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{rec.name}</p>
                      <p className="text-xs opacity-90 mt-1">Trending topic</p>
                    </div>
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.aside>
      </div>
    </div>
  );
}
