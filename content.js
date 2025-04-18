// Function to remove ad div and fix layout
function fixLayout() {
  // Remove the ad div
  const adDiv = document.querySelector('div.hidden.lg\\:block.overflow-hidden.transition-all.duration-500.ease-in-out.p-4[style*="width: 20%"]');
  if (adDiv) {
    adDiv.remove();
    console.log('TUF Layout Fixer: Ad div removed');
  }
  
  // Fix main content width back to 100%
  const mainContentDiv = document.querySelector('section.px-\\[13px\\].lg\\:px-8.pt-\\[18px\\].w-full.lg\\:w-\\[80\\%\\]');
  if (mainContentDiv) {
    mainContentDiv.classList.remove('lg:w-[80%]');
    mainContentDiv.classList.add('lg:w-[100%]');
    console.log('TUF Layout Fixer: Main content width fixed');
  }
}

// Run immediately when the script loads
fixLayout();

// Set up a mutation observer to handle dynamically loaded content
const observer = new MutationObserver(function(mutations) {
  fixLayout();
});

// Start observing the document with the configured parameters
observer.observe(document.body, { childList: true, subtree: true }); 