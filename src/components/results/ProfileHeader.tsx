import { Leaf, Sprout, Rocket, TrendingUp } from "lucide-react";

type ProfileType = 'INICIAL' | 'ESTABILIDAD' | 'CRECIMIENTO' | 'LIDER';

interface ProfileHeaderProps {
  profile: ProfileType;
  businessName: string | null;
  ownerName: string | null;
  revenueLabel: string;
}

const profileConfig: Record<ProfileType, {
  icon: typeof Leaf;
  label: string;
  color: string;
  bgColor: string;
  message: string;
}> = {
  INICIAL: {
    icon: Leaf,
    label: 'Etapa Inicial',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100',
    message: 'Estás construyendo las bases de tu negocio. Es el momento perfecto para establecer una presencia digital sólida.'
  },
  ESTABILIDAD: {
    icon: Sprout,
    label: 'En Estabilidad',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    message: 'Tu negocio tiene flujo estable. Es hora de profesionalizar tu marketing para mantener el crecimiento.'
  },
  CRECIMIENTO: {
    icon: TrendingUp,
    label: 'En Crecimiento',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    message: 'Tienes capacidad de escalar. Tu inversión en marketing debe reflejar tu potencial de crecimiento.'
  },
  LIDER: {
    icon: Rocket,
    label: 'Líder Local',
    color: 'text-amber-600',
    bgColor: 'bg-amber-100',
    message: 'Eres un referente en tu zona. Es momento de dominar el mercado con estrategias avanzadas.'
  }
};

const ProfileHeader = ({ profile, businessName, ownerName, revenueLabel }: ProfileHeaderProps) => {
  const config = profileConfig[profile];
  const Icon = config.icon;

  return (
    <div className="text-center space-y-4">
      {/* Profile Icon */}
      <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${config.bgColor} mx-auto`}>
        <Icon className={`h-10 w-10 ${config.color}`} />
      </div>

      {/* Greeting */}
      {ownerName && (
        <p className="text-lg text-muted-foreground">
          ¡Hola, <span className="font-semibold text-foreground">{ownerName}</span>!
        </p>
      )}

      {/* Business Name */}
      {businessName && (
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
          Diagnóstico de {businessName}
        </h1>
      )}

      {/* Profile Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-current" style={{ borderColor: 'currentColor' }}>
        <Icon className={`h-5 w-5 ${config.color}`} />
        <span className={`font-bold ${config.color}`}>{config.label}</span>
      </div>

      {/* Revenue context */}
      <p className="text-sm text-muted-foreground">
        Basado en facturación: <span className="font-semibold">{revenueLabel}</span>
      </p>

      {/* Profile message */}
      <p className="text-lg text-muted-foreground max-w-xl mx-auto">
        {config.message}
      </p>
    </div>
  );
};

export default ProfileHeader;
