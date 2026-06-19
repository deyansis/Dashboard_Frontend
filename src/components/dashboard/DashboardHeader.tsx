interface Props {
  onRefresh: () => void;
}

const DashboardHeader = ({
  onRefresh,
}: Props) => {
  return (
    <section className="dashboard-header">

      <div>

        <h1>
          Dashboard de Sentimiento Ciudadano
        </h1>

        <p>
          Sistema Inteligente de Monitoreo y
          Análisis de Percepción Ciudadana
        </p>

      </div>

      <button onClick={onRefresh}>
        Actualizar Datos
      </button>

    </section>
  );
};

export default DashboardHeader;