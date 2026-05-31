// Function that simulates fetching posts data until Implement a real API
export const fetchDiscussions = () => {
  return [
    {
      id: 1,
      title: 'Why is Vite so much faster than older tools (Webpack)?',
      time: '2 hours ago',
      preview: 'After moving my project to Vite, the development server startup time dropped to under 300ms. It all comes down to Vite leveraging native ESM in the browser and avoiding bundling the entire project ahead of time during development.'
    },
    {
      id: 2,
      title: 'Advantages of Dark Mode in UI Design',
      time: '5 hours ago',
      preview: 'A dark gray background significantly reduces eye strain during night work. The key is to avoid pure black backgrounds with pure white text, as this creates harsh contrast that tires out the eyesight.'
    },
    {
      id: 3,
      title: 'Organizing Your Day with Time Blocking',
      time: 'yesterday',
      preview: 'Splitting your workday into distinct time blocks helps eliminate multitasking. When you set a specific hour for coding and a specific hour for rest in advance, your focus becomes much deeper.'
    }
  ];
};