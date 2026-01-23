import { Card, CardContent } from "@/components/ui/card";
import { 
  MapPin, 
  DollarSign, 
  Users, 
  Globe, 
  AlertTriangle, 
  Check, 
  X 
} from "lucide-react";

interface DiagnosticSummaryProps {
  googleStatus: string | null;
  monthlyRevenue: string | null;
  teamSize: string | null;
  digitalHealth: string | null;
}

const googleStatusLabels: Record<string, { label: string; status: 'good' | 'warning' | 'bad' }> = {
  nuevo: { label: 'Nuevo / Empezando', status: 'warning' },
  invisible: { label: 'No aparezco / Suspendido', status: 'bad' },
  noVende: { label: 'Aparezco pero no vendo', status: 'warning' },
  dominar: { label: 'Quiero dominar', status: 'good' }
};

const revenueLabels: Record<string, { label: string; range: string }> = {
  'menos10k': { label: 'Menos de $10k', range: '$0 - $10,000/mes' },
  '10k-25k': { label: '$10k - $25k', range: '$10,000 - $25,000/mes' },
  '25k-60k': { label: '$25k - $60k', range: '$25,000 - $60,000/mes' },
  'mas60k': { label: 'Más de $60k', range: '$60,000+/mes' }
};

const teamLabels: Record<string, string> = {
  solo: 'Solo yo',
  pequeno: '2-6 empleados',
  grande: '10+ empleados'
};

const digitalLabels: Record<string, { label: string; status: 'good' | 'warning' | 'bad' }> = {
  nada: { label: 'Sin presencia', status: 'warning' },
  acceso: { label: 'Acceso completo', status: 'good' },
  perdido: { label: 'Acceso perdido', status: 'bad' },
  malNAP: { label: 'Info incorrecta (NAP)', status: 'bad' }
};

const StatusIcon = ({ status }: { status: 'good' | 'warning' | 'bad' }) => {
  if (status === 'good') return <Check className="h-4 w-4 text-green-600" />;
  if (status === 'warning') return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
  return <X className="h-4 w-4 text-red-600" />;
};

const DiagnosticSummaryCards = ({ 
  googleStatus, 
  monthlyRevenue, 
  teamSize, 
  digitalHealth 
}: DiagnosticSummaryProps) => {
  const googleInfo = googleStatus ? googleStatusLabels[googleStatus] : null;
  const revenueInfo = monthlyRevenue ? revenueLabels[monthlyRevenue] : null;
  const digitalInfo = digitalHealth ? digitalLabels[digitalHealth] : null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Visibility Card */}
      <Card className="border border-border/50">
        <CardContent className="p-4 text-center space-y-2">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mx-auto">
            <MapPin className="h-5 w-5 text-primary" />
          </div>
          <h4 className="text-sm font-medium text-muted-foreground">Visibilidad</h4>
          {googleInfo ? (
            <div className="flex items-center justify-center gap-2">
              <StatusIcon status={googleInfo.status} />
              <span className="text-sm font-semibold">{googleInfo.label}</span>
            </div>
          ) : (
            <span className="text-sm text-muted-foreground">No especificado</span>
          )}
        </CardContent>
      </Card>

      {/* Revenue Card */}
      <Card className="border border-border/50">
        <CardContent className="p-4 text-center space-y-2">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100 mx-auto">
            <DollarSign className="h-5 w-5 text-green-600" />
          </div>
          <h4 className="text-sm font-medium text-muted-foreground">Facturación</h4>
          {revenueInfo ? (
            <span className="text-sm font-semibold">{revenueInfo.range}</span>
          ) : (
            <span className="text-sm text-muted-foreground">No especificado</span>
          )}
        </CardContent>
      </Card>

      {/* Team Card */}
      <Card className="border border-border/50">
        <CardContent className="p-4 text-center space-y-2">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 mx-auto">
            <Users className="h-5 w-5 text-blue-600" />
          </div>
          <h4 className="text-sm font-medium text-muted-foreground">Equipo</h4>
          <span className="text-sm font-semibold">
            {teamSize ? teamLabels[teamSize] || teamSize : 'No especificado'}
          </span>
        </CardContent>
      </Card>

      {/* Digital Health Card */}
      <Card className="border border-border/50">
        <CardContent className="p-4 text-center space-y-2">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 mx-auto">
            <Globe className="h-5 w-5 text-purple-600" />
          </div>
          <h4 className="text-sm font-medium text-muted-foreground">Salud Digital</h4>
          {digitalInfo ? (
            <div className="flex items-center justify-center gap-2">
              <StatusIcon status={digitalInfo.status} />
              <span className="text-sm font-semibold">{digitalInfo.label}</span>
            </div>
          ) : (
            <span className="text-sm text-muted-foreground">No especificado</span>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default DiagnosticSummaryCards;
