// MOCK DATA - EEE BOOTCAMP

// Individual Batch Data (2024-2028)
// =====================================================================

const PROFILES_2024_2028 = [
    {
        id: 'B324010',
        name: 'Ayush Aman Pany',
        imageUrl: 'https://placehold.co/200x200/F2BED1/343A40?text=AAP',
        bio: 'EEE Football Striker.',
        linkedin: 'https://linkedin.com/in/alexdoe',
        instagram: 'https://instagram.com/alexdoe',
    },
    {
        id: 'B324012',
        name: 'Baba Prasad Rath',
        imageUrl: 'https://placehold.co/200x200/F2BED1/343A40?text=BPR',
        bio: 'Mr EEE.',
        linkedin: 'https://linkedin.com/in/janesmith',
        instagram: 'https://instagram.com/janesmith',
    },
    {
        id: 'B324022',
        name: 'OMM',
        imageUrl: 'https://placehold.co/200x200/F2BED1/343A40?text=O',
        bio: 'EEE CR',
        linkedin: 'https://linkedin.com/in/janesmith',
        instagram: 'https://instagram.com/janesmith',
    },
    {
        id: 'B324030',
        name: 'Rishal Swain',
        imageUrl: 'https://placehold.co/200x200/F2BED1/343A40?text=RS',
        bio: 'EEE Nalua',
        linkedin: 'https://linkedin.com/in/janesmith',
        instagram: 'https://instagram.com/janesmith',
    },
    {
        id: 'B324041',
        name: 'Spandan Hota',
        imageUrl: 'https://placehold.co/200x200/F2BED1/343A40?text=SH',
        bio: 'Created this website',
        linkedin: 'https://linkedin.com/in/janesmith',
        instagram: 'https://instagram.com/janesmith',
    },
];

const HIGHLIGHTS_2024_2028 = [
    {
        studentName: 'EEE',
        title: 'Football GC Runners Up',
        description: 'Finalists in Football during GC 2024',
        type: 'Sports',
        imageUrl: 'https://placehold.co/800x600/944E63/fff?text=Football',
    },
    {
        studentName: 'Baba',
        title: 'Mr.EEE',
        description: 'Mr. EEE',
        type: 'Cultural',
        imageUrl: 'https://placehold.co/800x600/D8B4F8/fff?text=EEE',
    },
];

const GALLERY_2024_2028 = [
    { src: 'https://placehold.co/600x400/D8B4F8/fff?text=Event', alt: 'Photo from a college event' },
    { src: 'https://placehold.co/600x400/944E63/fff?text=Freshers', alt: 'Photo from a freshers' },
];

// Site Contributor Data
// =====================================================================

export const DEVS = [
    {
        id: 'dev-1',
        name: 'Spandan Hota',
        description: 'Full-Stack',
        imageUrl: 'https://placehold.co/200x200/F2BED1/343A40?text=SH',
        linkedin: '#',
    },
];

// Master Data Assembly
// =====================================================================

export const batches = [
    {
        year: '2024-28',
        description: 'The pioneering batch of the EEE Bootcamp website, setting the standard for future generations.',
        students: PROFILES_2024_2028,
        highlights: HIGHLIGHTS_2024_2028, // Renamed from achievements
        gallery: GALLERY_2024_2028,
    },
];

// Combines all batch galleries for the main gallery page.
export const GALLERY_IMAGES = batches.flatMap(batch => batch.gallery);

