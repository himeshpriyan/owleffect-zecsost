const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-lg font-bold">
          <span className="text-gradient-gold">The Owl</span>{" "}
          <span className="text-foreground">Creations</span>
        </p>
        <p className="text-muted-foreground text-sm font-body">
          © {new Date().getFullYear()} The Owl Creations. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
