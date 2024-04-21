// This function highlights terms in a given text by wrapping them in a span with a red text class
export function highlightText(text, searchTerm) {
    if (!searchTerm.trim()) return text;
    const regex = new RegExp(`(${searchTerm})`, 'gi'); // Global and case-insensitive
    return text.replace(regex, `<span class="text-red-500">$1</span>`);
  }
  