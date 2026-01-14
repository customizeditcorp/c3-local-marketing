import DiagnosticWizard from "./DiagnosticWizard";

const DiagnosticSection = () => {
  return (
    <section id="diagnostico" className="section-padding bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Tu camino de <span className="text-primary">Invisible</span> a <span className="text-secondary">Imparable</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            No adivinamos. Te ubicamos en la etapa exacta.
          </p>
        </div>
        <DiagnosticWizard />
      </div>
    </section>
  );
};

export default DiagnosticSection;
