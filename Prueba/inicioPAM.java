import java.util.Scanner;

public class inicioPAM {

    // Método que muestra el reglamento de la materia POO
    public void ReglamentoPOO() {
        System.out.println("=== Reglamento POO ===");
        System.out.println("1. Se requiere 80% de asistencia para tener derecho a evaluación parcial y 80% de trabajos en clase.");
        System.out.println("2. Se permiten 10 minutos de tolerancia y si el alumno llega después de este tiempo puede permanecer en la clase,");
        System.out.println("   pero no se tomará la asistencia (Solamente en los horarios de inicio: 7:00 a.m y 14:00 p.m).");
        System.out.println("3. Las faltas deberán estar justificadas mediante el correo institucional con un plazo máximo de 24 horas posteriores");
        System.out.println("   a la hora de falta en clase mediante correo del tutor(a). Justificantes entregados fuera de la fecha límite no se aceptan.");
        System.out.println("   Únicamente se aceptarán recetas médicas y citatorios jurídicos (de forma física deben ser presentados al tutor).");
        System.out.println("4. Las tareas y trabajos deberán subirse al Classroom de forma individual y no se recibirán de manera extemporánea,");
        System.out.println("   salvo previo justificante validado por el tutor.");
        System.out.println("5. Las tareas y trabajos deben presentarse en tiempo y forma. La demora sin justificante o con justificante fuera del límite no se acepta.");
        System.out.println("6. Utilizar el correo institucional para trabajar bajo la plataforma Google Classroom.");
        System.out.println("7. El plagio o copia de trabajos y/o exámenes será condicionado a reprobar la asignatura y se reportará al área correspondiente.");
        System.out.println("8. Cualquier deshonestidad académica será sancionada reprobando el parcial sin derecho a examen final.");
        System.out.println("9. En caso de indisciplina o falta de respeto hacia docentes, administrativos o compañeros, se realizará una primera llamada de atención.");
        System.out.println("   Si el alumno hace caso omiso deberá abandonar el aula. Con tres incidencias de este tipo no tendrá derecho a examen final o parcial.");
        System.out.println("10. Uso de laptops y/o dispositivos móviles quedará limitado a actividades que así lo requieran.");
        System.out.println("11. Prohibido el uso de audífonos durante la clase.");
        System.out.println("12. Prohibido comer y/o tomar líquidos en el salón.");
        System.out.println("13. Prohibido sentarse encima de las mesas, así como columpiarse en las sillas.");
        System.out.println("14. Todo tema académico debe ser revisado primero con el docente; si no se resuelve, pasar con el tutor, después con la coordinación de tutores,");
        System.out.println("    y en última instancia con la dirección del programa educativo (siguiendo este orden obligatoriamente).");
        System.out.println("15. Cualquier situación no prevista en este reglamento deberá pasar directamente con la dirección del programa educativo.");
        System.out.println("16. El día destinado a la entrega de calificaciones todos los estudiantes deben estar presentes. Ese día se entregarán exámenes y se dará retroalimentación.");
        System.out.println("17. Este reglamento entra en vigor después de ser firmado o aceptado por la mayoría de estudiantes en la primera sesión de la materia.");
        System.out.println("    Una vez aceptado por al menos el 50% más el jefe de grupo, será vigente para todos los alumnos inscritos aunque no hayan estado presentes.");
        System.out.println();
    }

    // Método que muestra los lineamientos de Classroom
    public void LineamientosClassroom() {
        System.out.println("=== Lineamientos Classroom ===");
        System.out.println("1. Revisar constantemente las publicaciones.");
        System.out.println("2. Subir tareas en el formato solicitado.");
        System.out.println("3. No compartir códigos o archivos sin autorización.");
        System.out.println("4. Revisar calificaciones y retroalimentación.");
        System.out.println();
    }

    // Método que muestra las fechas de parciales
    public void FechasdeParciales() {
        System.out.println("=== Fechas de Parciales ===");
        System.out.println("1er Parcial: 29-09-25");
        System.out.println("2do Parcial: 03-11-25");
        System.out.println("3er Parcial: 01-12-25");
        System.out.println("Examen Final: 08-12-25");
        System.out.println();
    }

    // Método que muestra los porcentajes por parcial en forma de tabla
    public void PorcentajesporParcial() {
        System.out.println("=== Porcentajes por Parcial ===");
        System.out.println("                1P     2P     3P");
        System.out.println("Evidencia Conocimiento   40%    40%    20%");
        System.out.println("Evidencia Desempeño      20%    20%    10%");
        System.out.println("Evidencia Producto       30%    20%    40%");
        System.out.println("Proyecto Integrador      10%    20%    30%");
        System.out.println();
    }

    // Método principal para ejecutar el programa con menú
    public static void main(String[] args) {
        inicioPAM pam = new inicioPAM();
        Scanner sc = new Scanner(System.in);
        int opcion;

        do {
            System.out.println("===== MENÚ PRINCIPAL =====");
            System.out.println("1. Ver Reglamento POO");
            System.out.println("2. Ver Lineamientos Classroom");
            System.out.println("3. Ver Fechas de Parciales");
            System.out.println("4. Ver Porcentajes por Parcial");
            System.out.println("0. Salir");
            System.out.print("Seleccione una opción: ");
            opcion = sc.nextInt();

            switch (opcion) {
                case 1:
                    pam.ReglamentoPOO();
                    break;
                case 2:
                    pam.LineamientosClassroom();
                    break;
                case 3:
                    pam.FechasdeParciales();
                    break;
                case 4:
                    pam.PorcentajesporParcial();
                    break;
                case 0:
                    System.out.println("Saliendo del programa...");
                    break;
                default:
                    System.out.println("Opción inválida. Intente nuevamente.");
            }

        } while (opcion != 0);

        sc.close();
    }
}
