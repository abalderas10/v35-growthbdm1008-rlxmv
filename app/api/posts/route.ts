import { getPosts } from '@/lib/mdx';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const posts = await getPosts();
    if (!posts || posts.length === 0) {
      console.warn('No posts found');
      return NextResponse.json({ posts: [], message: 'No posts found' }, { status: 200 });
    }
    return NextResponse.json({ posts });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}