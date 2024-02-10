const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string) => {
  const res = await fetch(`${URL}/${id}`);
  const result = res.json();
  console.log(result);
  return result;
};

export default getBillboard;
