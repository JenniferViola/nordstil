// lib/date.ts

export const isNew = (published: string) => {
  if (!published) return false;
  const publishedDate = new Date(published);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  // getTime()?
  const diffTime = today.getTime() - publishedDate.getTime();
  const diffDays = diffTime / (1000 * 60 * 60 * 24); // converts ms to days
  return diffDays < 7;
};
