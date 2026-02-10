import Link from "next/link";
import type { ReactNode } from "react";

// Entity-to-URL mapping - explicit and maintainable
const entityLinks: Record<string, string> = {
  // Companies
  "natural.co": "https://natural.co",
  natural: "https://natural.co",
  openai: "https://openai.com",
  osmosis: "https://osmosis.ai",
  notability: "https://notability.com",
  aws: "https://aws.amazon.com",
  priceline: "https://priceline.com",
  "bain & co": "https://bain.com",
  "sakana ai": "https://sakana.ai",
  "k-scale labs": "https://kscale.dev",
  // Universities
  northeastern: "https://northeastern.edu",
  "mit ee": "https://mit.edu",
  mit: "https://mit.edu",
  minerva: "https://minerva.edu",
  waterloo: "https://uwaterloo.ca",
  // Labs/Organizations
  "mit media lab": "https://media.mit.edu",
  "mit video game orchestra": "https://www.youtube.com/channel/UCVtU0-ALytaxlR68Tv8xZ2g",
  mechanize: "https://mechanize.work",
  "georgia tech": "https://gatech.edu",
  "amazon alexa": "https://alexa.amazon.com",
  vercel: "https://vercel.com",
};

// Case-insensitive entity matching
function findEntityMatches(text: string): Array<{
  entity: string;
  url: string;
  start: number;
  end: number;
}> {
  const matches: Array<{
    entity: string;
    url: string;
    start: number;
    end: number;
  }> = [];
  
  const lowerText = text.toLowerCase();
  
  // Sort entities by length (longest first) to match longer phrases before shorter ones
  const sortedEntities = Object.keys(entityLinks).sort((a, b) => b.length - a.length);
  
  for (const entity of sortedEntities) {
    let startIndex = 0;
    
    while (true) {
      const index = lowerText.indexOf(entity.toLowerCase(), startIndex);
      if (index === -1) break;
      
      // Check if this position is already covered by another match
      const isOverlapping = matches.some(
        (match) => index >= match.start && index < match.end
      );
      
      if (!isOverlapping) {
        matches.push({
          entity,
          url: entityLinks[entity],
          start: index,
          end: index + entity.length,
        });
      }
      
      startIndex = index + entity.length;
    }
  }
  
  // Sort matches by start position
  return matches.sort((a, b) => a.start - b.start);
}

export function linkify(text: string): ReactNode {
  const matches = findEntityMatches(text);
  
  if (matches.length === 0) {
    return text;
  }
  
  const result: ReactNode[] = [];
  let lastIndex = 0;
  
  for (const match of matches) {
    // Add text before the match
    if (match.start > lastIndex) {
      result.push(text.slice(lastIndex, match.start));
    }
    
    // Add the linked entity
    result.push(
      <Link
        key={match.start}
        href={match.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground underline decoration-primary/30 underline-offset-2 hover:decoration-primary transition-colors"
      >
        {text.slice(match.start, match.end)}
      </Link>
    );
    
    lastIndex = match.end;
  }
  
  // Add remaining text
  if (lastIndex < text.length) {
    result.push(text.slice(lastIndex));
  }
  
  return result;
}

