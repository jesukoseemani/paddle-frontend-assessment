import { useEffect, useState } from 'react';
import { publicRequest } from '../adapters/RequestMethods';

export default function useBookSearch(pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    const getUsers = async () => {
      try {
        const res = await publicRequest.get(
          `/search/repositories?q=created:>2021-08-13&sort=stars&order=desc&page=${pageNumber}`,
        );
        setUsers((prevUsers) => [...prevUsers, ...res.data.items]);
        setHasMore(res.data.items.length > 0);
        setLoading(false);
      } catch (err) {
        setError(true);
      }
    };
    getUsers();
  }, [pageNumber]);

  return {
    loading, error, users, hasMore,
  };
}
