const bgs = [
  'bg-[#dbe9fe]',
  'bg-[#fef4db]',
  'bg-[#fee4db]',
  'bg-[#dbdefe]',
  'bg-[#fedbe6]',
  'bg-[#ebdbfe]',
  'bg-[#eee0d5]',
  'bg-[#d5e3ee]',
  'bg-[#edd5ee]',
  'bg-[#d5ebee]',
];

export const CommonUtil = {
  getRandomBackgroundColor() {
    const targetIndex = Math.floor(Math.random() * bgs.length);
    return bgs[targetIndex];
  },
};
