import platforms from "../src/data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () => ({ data: platforms, error: null });
// useData<Platform>("/platforms/lists/parents")

export default usePlatform;
