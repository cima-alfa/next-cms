import {
  Robots,
  SitemapChangeFreq,
  SitemapInclude,
  SitemapPrio,
} from "@lib/prisma/db";

export enum PageEnum {
  id,
  title,
  content,
  createdAt,
  updatedAt,
  published,
  metadata,
}

export type Page = {
  id: string | null;
  title: string;
  content: string | null;
  createdAt?: Date;
  updatedAt?: Date | null;
  published: boolean;
  metadata?: PageMetaData;
};

export type PageMetaData = null | {
  id: number | null;
  title: string;
  description: string | null;
  permalink: string;
  robots: Robots;
  sitemapInclude: SitemapInclude;
  sitemapPrio: SitemapPrio;
  sitemapChangeFreq: SitemapChangeFreq;
  pageId: string;
};
