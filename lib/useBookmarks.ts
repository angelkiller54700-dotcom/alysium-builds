"use client";

import { useCallback, useEffect, useState } from "react";

/**
 * Lightweight, per-visitor "saved projects" list backed by localStorage.
 * No backend/account needed — purely a nice-to-have client-side touch.
 * Starts empty on the server render, then hydrates from storage on mount,
 * so there's no SSR/client mismatch (just a harmless one-frame update).
 */
const STORAGE_KEY = "alysium-bookmarks";

function readStored(): string[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<string[]>([]);

  useEffect(() => {
    setBookmarks(readStored());
  }, []);

  const toggle = useCallback((slug: string) => {
    setBookmarks((prev) => {
      const next = prev.includes(slug)
        ? prev.filter((s) => s !== slug)
        : [...prev, slug];
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // localStorage unavailable (private browsing, blocked storage, etc.)
        // — the toggle still works for this session, it just won't persist.
      }
      return next;
    });
  }, []);

  const isBookmarked = useCallback(
    (slug: string) => bookmarks.includes(slug),
    [bookmarks]
  );

  return { bookmarks, toggle, isBookmarked };
}
