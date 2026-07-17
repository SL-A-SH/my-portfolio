// components/sections/Bookshelf.jsx
import { Link } from 'react-router-dom';
import { projects } from '../../constants/projects';

// Hand-picked spread across categories — the shelf is a showcase, not the full list
const SHELF_PROJECT_IDS = ['leaf-and-spine', '1', '2', '5', 'prof-1', 'prof-2', 'prof-4'];

// Real shelves aren't uniform — widths vary slightly, 28-44px
const SPINE_WIDTHS = [36, 30, 42, 33, 39, 28, 44];

const CATEGORY_SPINE = {
  'Mobile Apps':       { top: '#818cf8', bottom: '#4338ca' },
  'Game Development':  { top: '#38bdf8', bottom: '#0369a1' },
  'Professional Work': { top: '#34d399', bottom: '#047857' },
};
const DEFAULT_SPINE = CATEGORY_SPINE['Mobile Apps'];

const Bookshelf = () => {
  const books = SHELF_PROJECT_IDS
    .map((id) => projects.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <nav aria-label="Featured projects shelf" className="hidden lg:block">
      <div className="bookshelf-scene">
        <div className="bookshelf-glow" aria-hidden="true" />
        <div className="bookshelf-group">
          {books.map((project, i) => {
            const spine = CATEGORY_SPINE[project.category] ?? DEFAULT_SPINE;
            const width = SPINE_WIDTHS[i % SPINE_WIDTHS.length];
            return (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                aria-label={`View details for ${project.title}`}
                className="bookshelf-book"
                style={{
                  '--spine-w': `${width}px`,
                  '--spine-top': spine.top,
                  '--spine-bottom': spine.bottom,
                }}
              >
                <div className="bookshelf-book-inner">
                  <div className="bookshelf-spine" aria-hidden="true">
                    <span className="bookshelf-spine-label">{project.title}</span>
                  </div>
                  <div className="bookshelf-cover" aria-hidden="true">
                    <span className="bookshelf-cover-tag">{project.tags?.[0]}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="bookshelf-plank" aria-hidden="true" />
      </div>
    </nav>
  );
};

export default Bookshelf;
