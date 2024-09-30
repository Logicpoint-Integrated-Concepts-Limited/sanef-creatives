import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.NODE_ENV === "development"
      ? `${import.meta.env.VITE_REACT_APP_LOCAL_BASEURL}`
      : `${import.meta.env.VITE_REACT_APP_PROD_BASEURL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  config.headers["Authorization"] = `Bearer ${
    import.meta.env.NODE_ENV === "development"
      ? import.meta.env.VITE_REACT_APP_LOCAL_BEARER_TOKEN
      : import.meta.env.VITE_REACT_APP_PROD_BEARER_TOKEN
  }`;
  return config;
}, null);

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response.status === 401) {
      console.error(error.response);
      // window.location.reload();
    } else if (error.response.status === 503) {
      console.error(error.response);
    } else {
      console.error(error.response.data.message);
      throw new Error(error.response.data.message, {
        cause: error.response.status,
      });
    }
  }
);

/######################## HEADER & FOOTER ENDPOINT ##########################/;

export const getHeaderFooterContent = () => {
  return api.get(
    `global?populate[Header][populate][MenuItem]=*&populate[Header][populate][OurProjects]=*&populate[Header][populate][MenuItem2]=*&populate[Header][populate][OurTeam]=*&populate[Header][populate][MenuItem3]=*&populate[Header][populate][ContactUs]=*&populate[Footer][populate][Column1]=*&populate[Footer][populate][Column2]=*&populate[Footer][populate][SocialLinks]=*&populate[Footer][populate][CompanyAddressList]=*`
  );
};

export const getPoliceStations = () => {
  return api.get(
    `police-stations?populate=*&sort[0]=StationName&pagination[page]=1&pagination[pageSize]=6`
  );
};

export const getPoliceStationDetails = (slug) => {
  return api.get(
    `police-stations?filters[Slug][$eq]=${slug}?sort[0]=StationName&populate=*`
  );
};

export const getSpaces = () => {
  return api.get(`nt-journey-links?populate=*`);
};

export const contact = (data) => {
  return api.post(`interests`, data);
};

export const getPoliceStationStates = () => {
  return api.get(`police-station-states?sort[0]=id`);
};

export const getPoliceStationsByStates = (stateID, limit) => {
  return api.get(
    `police-stations?sort[0]=StationName&pagination[start]=0&pagination[limit]=${limit}&filters[police_station_state][id][$eq]=${stateID}&populate[0]=AfterCarousel&populate[1]=BeforeCarousel&populate[2]=FurnitureCarousel`
  );
};

export const getNewsList = (limit) => {
  return api.get(
    `news-list?sort[0]=PostedAt:desc&pagination[start]=0&pagination[limit]=${limit}`
  );
};

export const getNewsDetails = (title) => {
  return api.get(`news-list?filters[Title][$eq]=${title}&populate=*`);
};

export const getGalleryList = (limit) => {
  return api.get(
    `gallery-items?sort[0]=PostedAt:desc&pagination[start]=0&pagination[limit]=${limit}&populate=*`
  );
};

export const getGalleryDetails = (title) => {
  return api.get(`gallery-items?filters[Title][$eq]=${title}&populate=*`);
};
