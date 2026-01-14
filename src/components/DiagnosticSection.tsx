import DiagnosticWizard from "./DiagnosticWizard";

const DiagnosticSection = () => {
  return (
    <section id="diagnostico" className="section-padding bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            ¿Qué necesita tu negocio <span className="text-primary">hoy</span>?
          </h2>
        </div>
        <DiagnosticWizard />
      </div>
    </section>
  );
};

export default DiagnosticSection;
