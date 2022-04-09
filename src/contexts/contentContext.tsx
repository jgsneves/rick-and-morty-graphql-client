import React, { createContext, useContext, useState } from 'react';

export type Content = 'characteres' | 'episodes';

interface ContentContext {
  content: Content;
  setContent: React.Dispatch<React.SetStateAction<Content>>;
}

interface ContentContextProviderProps {
  children: React.ReactNode;
}

const ContentContext = createContext<ContentContext>({} as ContentContext);

export const ContentContextProvider = ({
  children,
}: ContentContextProviderProps) => {
  const [content, setContent] = useState<Content>('characteres');
  return (
    <ContentContext.Provider
      value={{
        content,
        setContent,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContentContext = () => {
  const { content, setContent } = useContext(ContentContext);
  return {
    content,
    setContent,
  };
};
