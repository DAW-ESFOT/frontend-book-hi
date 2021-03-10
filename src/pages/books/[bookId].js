import Comments from "@/components/Comments";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { useRouter } from "next/router";
import React from "react";
import Loading from "@/components/Loading";
import withAuth from "@/hocs/withAuth";

const BookDetails = () => {
  const router = useRouter();
  const { bookId } = router.query;
  const { data, error } = useSWR(`/books/${bookId}`, fetcher);

  if (error) return <div>No se pudo cargar la información del artículo</div>;
  if (!data) return <Loading />;

  return (
    <div>
      <h1>{data.title}</h1>
      {/*<div>{data.user_data.name}</div>
      <p>{data.body}</p>

    {<Comments bookId={data.id} />*/}
    </div>
  );
};

export default withAuth(BookDetails);

// export async function getStaticProps(context) {
//   console.log("context", context);
//
//   try {
//     const { bookId } = context.params;
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_API_BASE_URL}/books/${bookId}`
//     );
//     const data = await res.json();
//
//     console.log("data", data);
//
//     if (!data) {
//       return {
//         notFound: true,
//       };
//     }
//
//     return {
//       props: {
//         book: data,
//       }, // will be passed to the page component as props
//     };
//   } catch (error) {
//     return {
//       props: {
//         article: null,
//       },
//     };
//   }
// }
//
// export async function getStaticPaths() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/books`);
//   const data = await res.json();
//
//   const books = data.data;
//
//   const paths = books.map((article) => {
//     return { params: { bookId: "" + article.id } };
//   });
//
//   return {
//     paths,
//     fallback: true, // See the "fallback" section below
//   };
// }
