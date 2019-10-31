const initialState = Array(10).fill({
  title: "JavaScript Basics",
  description:
    "The primary topics in this part of the specialization are: data structures (heaps, balanced search trees, hash tables, bloom filters), graph primitives (applications of breadth-first and depth-first search, connectivity, shortest paths), and their applications (ranging from deduplication to social network analysis)."
});

export default function(state = initialState, { type, payload }) {
  switch (type) {
    default:
      return initialState;
  }
}
